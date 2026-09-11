import os
from PIL import Image, ImageDraw, ImageFont

def create_icon(size, filename):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Background rounded rectangle
    padding = int(size * 0.04)
    radius = int(size * 0.22)
    
    # Draw background rounded box
    box = [padding, padding, size - padding, size - padding]
    draw.rounded_rectangle(box, radius=radius, fill=(15, 23, 42, 255)) # slate-900
    
    # Inner subtle glow border
    inner_box = [padding + 4, padding + 4, size - padding - 4, size - padding - 4]
    draw.rounded_rectangle(inner_box, radius=radius-2, outline=(99, 102, 241, 160), width=max(2, int(size * 0.015))) # indigo-500
    
    # Symbol: A stylized shield + golden network representing Influence & Defense
    center_x = size // 2
    center_y = size // 2
    
    shield_top = int(size * 0.22)
    shield_bottom = int(size * 0.78)
    shield_left = int(size * 0.24)
    shield_right = int(size * 0.76)
    
    shield_pts = [
        (shield_left, int(size * 0.32)),
        (center_x, shield_top),
        (shield_right, int(size * 0.32)),
        (shield_right, int(size * 0.54)),
        (center_x, shield_bottom),
        (shield_left, int(size * 0.54))
    ]
    
    # Draw shield outline
    draw.polygon(shield_pts, fill=(30, 41, 59, 220), outline=(245, 158, 11, 255)) # amber-500
    
    # Draw 7 nodes in a circle inside representing the 7 Principles of Influence
    import math
    node_radius = int(size * 0.16)
    node_size = max(3, int(size * 0.038))
    
    for i in range(7):
        angle = i * (2 * math.pi / 7) - math.pi / 2
        nx = int(center_x + node_radius * math.cos(angle))
        ny = int(center_y * 0.98 + node_radius * 0.85 * math.sin(angle))
        
        # Line from center
        draw.line([(center_x, int(center_y * 0.98)), (nx, ny)], fill=(99, 102, 241, 180), width=max(1, int(size * 0.012)))
        # Node dot
        draw.ellipse([nx - node_size, ny - node_size, nx + node_size, ny + node_size], fill=(251, 191, 36, 255), outline=(255, 255, 255, 220))
        
    # Center core symbol (Key / Eye of perception)
    core_size = max(4, int(size * 0.055))
    cy = int(center_y * 0.98)
    draw.ellipse([center_x - core_size, cy - core_size, center_x + core_size, cy + core_size], fill=(244, 63, 94, 255), outline=(255, 255, 255, 255), width=max(1, int(size * 0.015)))

    # Save
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    img.save(filename, 'PNG')
    print(f"Generated {filename} ({size}x{size})")

if __name__ == '__main__':
    out_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'icons')
    create_icon(512, os.path.join(out_dir, 'icon-512.png'))
    create_icon(192, os.path.join(out_dir, 'icon-192.png'))
    create_icon(180, os.path.join(out_dir, 'apple-touch-icon.png'))
    create_icon(64, os.path.join(out_dir, 'favicon.png'))
    create_icon(32, os.path.join(out_dir, 'favicon-32.png'))
    print("All PWA icons successfully generated!")
