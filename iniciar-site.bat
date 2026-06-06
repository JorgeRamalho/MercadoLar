@echo off
chcp 65001 >nul
title Mercadolar — Site Institucional
cd /d "%~dp0"

echo.
echo  ========================================
echo   MERCADOLAR — Iniciando o site...
echo  ========================================
echo.

if not exist "node_modules\" (
  echo  Instalando dependencias ^(primeira vez^)...
  call npm install
  if errorlevel 1 (
    echo  Erro ao instalar. Verifique se o Node.js esta instalado.
    pause
    exit /b 1
  )
  echo.
)

echo  Acesse no navegador:  http://localhost:5173
echo  No celular ^(mesma Wi-Fi^): use o link "Network" que aparece abaixo
echo.
echo  Para encerrar: feche esta janela ou pressione Ctrl+C
echo.

call npm run start

pause
