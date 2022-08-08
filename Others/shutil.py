# import shutil


# shutil.move(src_path, dst_path)

from pathlib import Path

for i in range(751):
    src_path = r"E:\Research Dataset\Image Exposer\Dataset\validation\INPUT_IMAGES\exposure " + "(" + str(i) + ").JPG"
    if(i%5 == 0):
        dst_path = r"E:\Research Dataset\Image Exposer\Dataset\validation\INPUT_IMAGES\5\exposure " + "(" + str(i) + ").JPG"
        Path(src_path).rename(dst_path)


    

#src_path = r"E:\Research Dataset\Image Exposer\Dataset\training\INPUT_IMAGES\exposure" + "(" + i + ").JPG"
#dst_path = r"E:\Research Dataset\Image Exposer\Dataset\training\INPUT_IMAGES\"
#Path(src_path).rename(dst_path)