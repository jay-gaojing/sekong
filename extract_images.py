import os
import zipfile
import shutil
import glob

base_dir = r"F:\weixin-file\xwechat_files\wxid_xaa8ag6oof1g22_356f\msg\attach\19787dadfce963cb16fe52a24ee0a499\2026-04\Rec\af52120492148f70\F"
dest_dir = r"f:\备份\win10备份文件\python-demo\旗袍数据库网站\nuxt-app\public\images\sekong"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

for i in range(9):
    cat_dir = os.path.join(base_dir, str(i))
    if not os.path.exists(cat_dir):
        continue
    
    cat_dest = os.path.join(dest_dir, str(i))
    if os.path.exists(cat_dest):
        shutil.rmtree(cat_dest)
    os.makedirs(cat_dest, exist_ok=True)
    
    images_found = 0
    zip_files = glob.glob(os.path.join(cat_dir, "*.zip"))
    if zip_files:
        zip_path = zip_files[0]
        try:
            with zipfile.ZipFile(zip_path, 'r', metadata_encoding='gbk') as zf:
                img_names = [n for n in zf.namelist() if n.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')) and '__MACOSX' not in n]
                for img_name in img_names[:5]:
                    with zf.open(img_name) as source, open(os.path.join(cat_dest, f"img_{images_found}.jpg"), "wb") as target:
                        shutil.copyfileobj(source, target)
                    images_found += 1
        except Exception as e:
            print(f"Error extracting {zip_path}: {e}")

    if images_found < 5:
        loose_images = glob.glob(os.path.join(cat_dir, "*.[pjJ][pnN][gG]")) + glob.glob(os.path.join(cat_dir, "*.webp"))
        for loose_img in loose_images:
            if images_found >= 5:
                break
            shutil.copy(loose_img, os.path.join(cat_dest, f"img_{images_found}.jpg"))
            images_found += 1
                
    result_imgs = os.listdir(cat_dest)
    print(f"Category {i}: {len(result_imgs)} images saved.")

print("Done extracting.")
