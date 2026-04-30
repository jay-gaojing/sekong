import os
import zipfile
import shutil

base_dir = r"F:\weixin-file\xwechat_files\wxid_xaa8ag6oof1g22_356f\msg\attach\19787dadfce963cb16fe52a24ee0a499\2026-04\Rec\4c827788396409ac\F"
output_dir = r"public\images\styles"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

def get_real_name(folder_id):
    mapping = {
        "1": "京派",
        "2": "苏派",
        "3": "海派",
        "4": "港派", # just in case
    }
    return mapping.get(folder_id, folder_id)

for folder_id in os.listdir(base_dir):
    folder_path = os.path.join(base_dir, folder_id)
    if os.path.isdir(folder_path):
        target_name = get_real_name(folder_id)
        target_output = os.path.join(output_dir, target_name)
        if not os.path.exists(target_output):
            os.makedirs(target_output)
            
        print(f"Processing {folder_path} -> {target_name}")
        image_count = 0
        
        # Read zips
        for f in os.listdir(folder_path):
            if f.endswith('.zip'):
                zip_path = os.path.join(folder_path, f)
                try:
                    with zipfile.ZipFile(zip_path, 'r', metadata_encoding='gbk') as zip_ref:
                        for info in zip_ref.infolist():
                            if not info.is_dir() and info.filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                                if image_count < 8: # extract 8 images per style
                                    extracted_name = f"style_{image_count+1}.jpg"
                                    out_path = os.path.join(target_output, extracted_name)
                                    with zip_ref.open(info) as source, open(out_path, 'wb') as target:
                                        shutil.copyfileobj(source, target)
                                    image_count += 1
                                else:
                                    break
                except Exception as e:
                    print(f"Error processing {zip_path}: {e}")
                    
        print(f"Extracted {image_count} images for {target_name}")
