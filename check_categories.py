import os

base_dir = r"F:\weixin-file\xwechat_files\wxid_xaa8ag6oof1g22_356f\msg\attach\19787dadfce963cb16fe52a24ee0a499\2026-04\Rec\af52120492148f70\F"
for i in range(9):
    path = os.path.join(base_dir, str(i))
    if os.path.exists(path):
        for f in os.listdir(path):
            try:
                # Assuming the file system string is mangled, let's get the original bytes if possible 
                # or just use os.fsencode
                b = os.fsencode(f)
                print(f"Folder {i}: {f} -> {b.decode('gbk', 'ignore')} or {b.decode('utf-8', 'ignore')}")
            except Exception as e:
                print(f"Folder {i}: {f} -> Error {e}")
