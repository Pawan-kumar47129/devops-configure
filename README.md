# DevOps Tools Website

A modern React website showcasing information about Terraform, Ansible, and Nagios - three essential DevOps tools.

## Features

- **Home Page**: Overview of all three tools with navigation cards
- **Terraform Page**: Comprehensive information about Infrastructure as Code
- **Ansible Page**: Details about automation and configuration management
- **Nagios Page**: IT infrastructure monitoring information
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
devops/
├── src/
│   ├── components/
│   │   ├── Home.jsx          # Home page component
│   │   ├── Terraform.jsx     # Terraform information page
│   │   ├── Ansible.jsx       # Ansible information page
│   │   ├── Nagios.jsx        # Nagios information page
│   │   └── *.css             # Component styles
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # App styles
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## Technologies Used

- **React 18**: UI library
- **React Router DOM**: Client-side routing
- **Vite**: Build tool and dev server
- **CSS3**: Modern styling with gradients and animations

## Pages

### Home
Overview page with cards for each tool and general features.

### Terraform
- What is Terraform?
- Key features
- Basic workflow
- Example configurations
- Use cases
- Best practices

### Ansible
- What is Ansible?
- Key features
- Core components
- Example playbooks
- Use cases
- Ansible Tower/AWX
- Best practices

### Nagios
- What is Nagios?
- Key features
- Core components
- Monitoring types
- Example configurations
- Nagios variants
- Use cases
- Best practices

## License

This project is open source and available for educational purposes.

