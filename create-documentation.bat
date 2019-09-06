@echo off

rem Set command line to use directory this file is located
SET mypath=%~dp0
cd %mypath:~0,-1%

echo "Begin creating documentation..."

php phpDocumentor.phar

rem If shortcut doesn't exist, we want to create it
IF NOT EXIST "/documentation-index.html" (
	mklink %mypath:~0,-1%."/documentation-index.html" %mypath:~0,-1%."/docs/index.html"
)

echo "Documentation created..."

rem Insist on keypress to close window
PAUSE