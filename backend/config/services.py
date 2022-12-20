from PIL import Image
def crop_center(pil_img) -> Image:
    """
    Функция для обрезки изображения по центру.
    """
    print(type(pil_img))
    img_width, img_height = pil_img.size
    crop = min(img_width, img_height)
    return pil_img.crop(((img_width - crop) // 2,
                         (img_height - crop) // 2,
                         (img_width + crop) // 2,
                         (img_height + crop) // 2))

def crop_center_v2(pil_img,format=(1,1)) -> Image:
    """
    Функция для обрезки изображения по центру.
    """
    width, height = pil_img.size
    crop_width, crop_height = pil_img.size
    div = width/height
    if div < format[0]/format[1]:
        x = (width*format[1]) / (height*format[0])
        crop_height = height*x
    elif (div>format[0]/format[1]):
        x = (height*format[0])/(width*format[1])
        crop_width = width*x

    return pil_img.crop(((width - crop_width) // 2,
                         (height - crop_height) // 2,
                         (width + crop_width) // 2,
                         (height + crop_height) // 2))