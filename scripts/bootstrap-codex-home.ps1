param(
  [Parameter(Mandatory = $true)]
  [string]$CodexHome,
  [Parameter(Mandatory = $true)]
  [string]$WorkspacePath
)

$ErrorActionPreference = "Stop"
$extendedPathPrefix = "\\?\"

function Get-BaseConfig {
  return @"
model = "gpt-5.4"
model_reasoning_effort = "xhigh"

[features]
js_repl = true
multi_agent = true
"@
}

function Get-TrustedProjectHeader {
  param([string]$Path)

  $fullPath = [System.IO.Path]::GetFullPath($Path)
  if ($fullPath.StartsWith($extendedPathPrefix)) {
    return "[projects.'$fullPath']"
  }

  return "[projects.'$extendedPathPrefix$fullPath']"
}

New-Item -ItemType Directory -Path $CodexHome -Force | Out-Null

$isolatedConfigPath = Join-Path $CodexHome "config.toml"
$defaultConfigPath = Join-Path $env:USERPROFILE ".codex\config.toml"

if (-not (Test-Path $isolatedConfigPath)) {
  if (Test-Path $defaultConfigPath) {
    $configContents = Get-Content $defaultConfigPath -Raw
    $configContents = [regex]::Replace(
      $configContents,
      "(?ms)^\[projects\.'[^']+'\]\r?\n(?:.+\r?\n)*?(?=^\[|\z)",
      ""
    ).Trim()

    if ($configContents.Length -gt 0) {
      $configContents += [Environment]::NewLine + [Environment]::NewLine
    } else {
      $configContents = Get-BaseConfig
    }
  } else {
    $configContents = Get-BaseConfig
  }

  Set-Content -Path $isolatedConfigPath -Value $configContents -Encoding ascii
}

$projectHeader = Get-TrustedProjectHeader -Path $WorkspacePath
$projectEntry = $projectHeader + [Environment]::NewLine + 'trust_level = "trusted"'

$isolatedConfig = Get-Content $isolatedConfigPath -Raw
if (-not $isolatedConfig.Contains($projectHeader)) {
  $separator = if ($isolatedConfig.Trim().Length -gt 0) {
    [Environment]::NewLine + [Environment]::NewLine
  } else {
    ""
  }

  Add-Content -Path $isolatedConfigPath -Value ($separator + $projectEntry + [Environment]::NewLine) -Encoding ascii
}
