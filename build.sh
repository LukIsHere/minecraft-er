cd build-linux
rm -r *
cmake ..
cmake --build .
cd ..
./build-linux/start