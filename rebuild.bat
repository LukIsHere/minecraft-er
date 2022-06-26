cd build-windows
del /S /Q *
cmake ..
cmake --build . -j
cd ..
.\build-windows\Debug\main.exe
