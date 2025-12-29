Main branch is - main
Akan's branch is - forAkan
Iman's branch is - forIman
Shad's branch is - forShad
In Terminal: (Inside GoHK, not frontend or backend)
- git branch branch_name
Example:
- git branch forAkan


Frontend:
In Terminal (inside proper branch in GoHK):
- cd GoHK-frontend
write these commands to install necessary libraries and packages:
- npm i tailwindcss @tailwindcss/vite
- npm i react-router-dom
- npm i react-toastify
- npm i react-icons
- npm i react-rating
- npm i react-redux
- npm i axios
- npm i @react-oauth/google 
- npm ireact-hook-form
to run write this command:
- npm run dev


Backend:
In Terminal (inside proper branch in GoHK):
Add another Terminal:
- cd GoHK-backend
write these commands to install necessary libraries and packages:
- python3 -m venv venv
- source venv/bin/activate
- pip install flask
to run (it's early for this yet):
- uvicorn app.main:app --reload --port 5000

