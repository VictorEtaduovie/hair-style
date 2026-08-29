from PIL import Image
from pathlib import Path

# Your original images folder
SOURCE_FOLDER = Path("images")

# New folder for the converted/renamed images
OUTPUT_FOLDER = Path("images-webp")

# Supported image formats
EXTENSIONS = {".jpg", ".jpeg", ".webp", ".png"}

# Number names
numbers = [
    "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
    "twenty-one", "twenty-two", "twenty-three", "twenty-four",
    "twenty-five", "twenty-six", "twenty-seven", "twenty-eight",
    "twenty-nine", "thirty"
]

# Check that source folder exists
if not SOURCE_FOLDER.exists():
    print(f"ERROR: Could not find the folder: {SOURCE_FOLDER}")
    print("Make sure this script is inside your wigcom project folder.")
    exit()

# Create output folder
OUTPUT_FOLDER.mkdir(exist_ok=True)

# Get all images
images = sorted(
    [
        file for file in SOURCE_FOLDER.iterdir()
        if file.is_file() and file.suffix.lower() in EXTENSIONS
    ],
    key=lambda x: x.name.lower()
)

if not images:
    print("No images found in the images folder.")
    exit()

print(f"Found {len(images)} images.\n")

for index, image_path in enumerate(images, start=1):

    # Use words up to 30
    if index <= len(numbers):
        name = f"hair-{numbers[index - 1]}.webp"
    else:
        name = f"hair-{index}.webp"

    output_path = OUTPUT_FOLDER / name

    try:
        # Open image
        image = Image.open(image_path)

        # Convert images that have transparency correctly
        if image.mode in ("RGBA", "LA"):
            converted = image
        else:
            converted = image.convert("RGB")

        # Save as WEBP
        converted.save(
            output_path,
            "WEBP",
            quality=90,
            method=6
        )

        print(f"✓ {image_path.name}  →  {name}")

    except Exception as error:
        print(f"✗ Could not convert {image_path.name}: {error}")

print("\n================================")
print("DONE!")
print(f"Converted images are in: {OUTPUT_FOLDER}")
print("================================")