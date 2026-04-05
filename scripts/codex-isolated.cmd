@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
for %%I in ("%SCRIPT_DIR%..") do set "REPO_ROOT=%%~fI"

set "CODEX_HOME=%USERPROFILE%\.codex-mazzarino-platform"

powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT_DIR%bootstrap-codex-home.ps1" -CodexHome "%CODEX_HOME%" -WorkspacePath "%REPO_ROOT%" >nul
if errorlevel 1 exit /b %errorlevel%

for /f "usebackq delims=" %%I in (`powershell -NoProfile -ExecutionPolicy Bypass -Command "(Get-Command codex.exe).Source"`) do set "CODEX_REAL=%%I"
if not defined CODEX_REAL (
  echo Could not locate codex.exe on PATH. 1>&2
  exit /b 1
)

"%CODEX_REAL%" %*
