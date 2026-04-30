import os

base_dir = r"F:\weixin-file\xwechat_files\wxid_xaa8ag6oof1g22_356f\msg\attach\19787dadfce963cb16fe52a24ee0a499\2026-04\Rec\4c827788396409ac\F"
for i in os.listdir(base_dir):
    path = os.path.join(base_dir, i)
    if os.path.isdir(path):
        for f in os.listdir(path):
            try:
                # use fsencode to get bytes if it's already a garbled str
                b = os.fsencode(f)
                name_gbk = b.decode('gbk', 'replace')
                name_utf = b.decode('utf-8', 'replace')
                print(f"[{i}] {name_gbk} | {name_utf} | Raw: {f}")
            except Exception as e:
                import traceback
                traceback.print_exc()
