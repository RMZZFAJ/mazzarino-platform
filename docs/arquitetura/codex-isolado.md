# Codex Isolado Neste Repositorio

Este projeto pode usar um ambiente isolado do Codex sem apagar o historico do outro repositorio.

## Como funciona

O launcher `scripts/codex-isolated.cmd` define `CODEX_HOME=%USERPROFILE%\.codex-mazzarino-platform` antes de iniciar o `codex.exe`.

Com isso, este repositorio passa a ter:

- `config.toml` proprio
- sessoes proprias
- historico proprio
- confianca do workspace separada

O bootstrap `scripts/bootstrap-codex-home.ps1` copia a configuracao global apenas na primeira execucao, remove entradas antigas de `[projects.*]` e marca este repositorio como `trusted`.

## Uso recomendado no VS Code

1. Crie ou mantenha um perfil dedicado do VS Code para este projeto.
2. Abra `Ctrl+,` no perfil dedicado e procure por `ChatGPT: Cli Executable`.
3. O valor esperado e:

```txt
C:\Users\renat\Projetos_Dev\Mazzarino Corp Sistema\mazzarino-platform\scripts\codex-isolated.cmd
```

4. Neste ambiente eu ja gravei esse valor em `C:\Users\renat\AppData\Roaming\Code\User\profiles\65422932\settings.json`.
5. Reabra o VS Code usando esse perfil quando estiver trabalhando neste repositorio.

## Observacoes

- O outro projeto continua usando `C:\Users\renat\.codex`.
- Este projeto passa a usar `C:\Users\renat\.codex-mazzarino-platform`.
- Assim, voce preserva conectores e preferencias de base, mas separa historico e contexto operacional.
