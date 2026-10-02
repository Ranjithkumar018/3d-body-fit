# 3D BODY FIT — Precision Fit Intelligence

A focused 3D fashion-tech web application built with **React**, **Three.js**, and **Tailwind CSS**.

## Workflow Flow (Strict 4 Screens)

```text
1. SCAN BODY  →  2. 3D BODY  →  3. CLOTH + 3D BODY FIT  →  4. FIT RESULT
```

### 1. SCAN BODY
- **Title**: Scan Your Body
- **Capture Options UI**: `[ 📷 Camera ]` and `[ 🖼 Gallery ]`
  - **Camera Mode** (Dedicated Body Scanner HUD):
    - **Step 1 — Front Body Photo**:
      - Live camera preview with head-to-feet frame and center alignment laser
      - Full-body front silhouette guide
      - Instruction: *"Stand straight and face the camera"*
      - Overlay: **FRONT VIEW**
      - User presses **Capture Front** → saves to Front Body Scan card
    - **Step 2 — Side Body Photo**:
      - Automatically switches to side view with profile silhouette
      - Instruction: *"Turn 90° and keep your body straight"*
      - Overlay: **SIDE VIEW**
      - User presses **Capture Side** → saves to Side Body Scan card
    - Card status: `✓ Captured` with `Retake Front` and `Retake Side` buttons
  - **Gallery Mode**:
    - Triggers device native image picker
    - Step 1: Upload Front Photo
    - Step 2: Upload Side Photo
    - Card status: `✓ Uploaded` with `Replace Front` and `Replace Side` buttons
- **Validation**:
  - Requires both views before enabling **"Start 3D Scan →"**
  - Contextual status helper:
    - *"Add front and side body images to continue."*
    - *"Please capture the side view to continue."*
    - *"Please capture the front view to continue."*
    - *"Front & side body scans ready — proceed to 3D reconstruction"*
- Full-body positioning guide with 4 core rules
- 1-Click Demo Scans button for quick evaluation

### 2. 3D BODY
- Large central 3D human body model in WebGL Three.js
- Rotate, zoom, pan, and view angle presets (**Front**, **Side**, **Back**, **Reset**)
- Interactive anatomical measurement rings (Chest, Waist, Hip, Shoulder, Height)
- Clean measurement cards:
  - **Height**: 172 cm
  - **Chest**: 92 cm
  - **Waist**: 78 cm
  - **Hip**: 94 cm
  - **Shoulder**: 44 cm
  - **Inseam**: 79 cm
- Hovering/clicking any card highlights the corresponding 3D laser ring
- Unit toggle (cm / in)
- Primary button: **Continue to Fit**

### 3. CLOTH + 3D BODY FIT
- Displays already-selected clothing (**Milano Structured Tailored Shirt**) fitted naturally on the 3D body
- Dynamic 3D Fit Heatmap shader showing strain/ease:
  - **Emerald Green**: Perfect Fit (0 to +3cm ease)
  - **Amber / Orange**: Slightly Tight / Tight (-1 to -3cm tension)
  - **Cyan / Blue**: Loose / Flare (> +4cm ease)
- Multi-angle inspection (Front, Side, Back, 360° turntable)
- Fit analysis panel comparing body vs clothing:
  - Chest — Perfect Fit
  - Waist — Perfect Fit
  - Shoulder — Slightly Tight / Perfect
  - Hip — Perfect Fit
  - Length — Perfect Fit
- Primary button: **View Fit Result**

### 4. FIT RESULT
- Prominent result badges:
  - **Recommended Size: L**
  - **Fit: Perfect**
  - **Fit Confidence: 92%**
- Final interactive 3D BODY + SELECTED CLOTHING viewer
- Measurement comparison table:
  - Chest: Body 92 cm | Clothing 94 cm | Fit: Perfect
  - Waist: Body 78 cm | Clothing 80 cm | Fit: Perfect
  - Shoulder: Body 44 cm | Clothing 44 cm | Fit: Perfect
  - Hip: Body 94 cm | Clothing 97 cm | Fit: Perfect
  - Length: Body 71 cm | Clothing 73 cm | Fit: Perfect
- Action CTAs: Add Recommended Size L to Bag (with celebration confetti) & Export Fit Report.

---

## Running Locally

```bash
cd "C:\Users\Ranjithkumar\.gemini\antigravity\scratch\3d-body-fit"
npm install
npm run dev
```

Server active at: `http://localhost:5173/`
