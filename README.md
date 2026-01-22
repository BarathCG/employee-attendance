# Employee Attendance and Leave Management System

A web-based employee management platform built using Angular 20.3.13.  
This system provides attendance tracking, leave management, employee directory, and an HR dashboard.

# Group Members

| Name | Registration Number | Christ Email ID |
|------|----------------------|------------------|
| Barath C G | 2462507 | barath.cg@btech.christuniversity.in |
| N Muthukrishnan | 2462519 | n.muthukrishnan@btech.christuniversity.in |
| Neal Sebastian | 2462520 | neal.sebastian@btech.christuniversity.in |
| Noel Kolanchery Roy | 2462522 | noel.kolanchery@btech.christuniversity.in |

# Features

## Core Functionality
- Attendance Tracking for all employees.
- Leave Request system with validations.
- Leave Approval workflow for managers.
- Employee List with basic information.
- HR Dashboard with key metrics.

## Technical Features
- Component-based architecture in Angular.
- Service layer for centralized data handling.
- Form validations using Angular Forms.
- Routing for navigation between modules.
- Responsive and mobile-friendly UI.
- SCSS-based custom styling.

# Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Angular | 20.3.13 | Front-end framework |
| TypeScript | ~5.4+ | Language |
| Node.js | Latest | Development runtime |
| SCSS | Built-in | Styling |
| Karma | Latest | Unit Testing |

# Project Structure
```
src/
├── app/
│ ├── attendance-tracker/
│ │ ├── attendance-tracker.css
│ │ ├── attendance-tracker.html
│ │ ├── attendance-tracker.spec.ts
│ │ └── attendance-tracker.ts
│
│ ├── dashboard/
│ │ ├── dashboard.css
│ │ ├── dashboard.html
│ │ ├── dashboard.spec.ts
│ │ └── dashboard.ts
│
│ ├── employee-list/
│ │ ├── employee-list.css
│ │ ├── employee-list.html
│ │ ├── employee-list.spec.ts
│ │ └── employee-list.ts
│
│ ├── leave-approval/
│ │ ├── leave-approval.css
│ │ ├── leave-approval.html
│ │ ├── leave-approval.spec.ts
│ │ └── leave-approval.ts
│
│ ├── leave-request/
│ │ ├── leave-request.css
│ │ ├── leave-request.html
│ │ ├── leave-request.spec.ts
│ │ └── leave-request.ts
│
│ ├── hr.service.ts
│ ├── app.routes.ts
│ ├── app.config.ts
│ ├── app.ts
│ ├── custom-theme.scss
│ ├── styles.css
│ ├── index.html
│ ├── main.ts
│ ├── server.ts
│ └── main.server.ts
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md
```



markdown
Copy code

# Getting Started

## Prerequisites
- Node.js v18 or higher
- npm v11 or higher
- Angular CLI installed globally  
npm install -g @angular/cli

shell
Copy code

## Installation

### Step 1: Navigate to project folder
cd employee-attendance

shell
Copy code

### Step 2: Install dependencies
npm install

shell
Copy code

### Step 3: Run development server
ng serve

shell
Copy code

### Step 4: Open the application
http://localhost:4200

markdown
Copy code

# Usage Guide

## Dashboard
- Displays daily attendance overview.
- Shows count of pending leave approvals.
- Quick statistics for HR.

## Attendance Tracker
- Mark employees present or absent.
- View attendance history.
- Filter by date or department.

## Employee List
- View all employees.
- Search and filter options.

## Leave Request
- Employees can request leave.
- Includes leave type, dates, and reason.
- Form validation enabled.

## Leave Approval
- Managers can approve or reject leave requests.
- Shows pending and completed actions.
- Status updates are reflected instantly.

# Key Components and Services

## Components
- attendance-tracker
- employee-list
- leave-request
- leave-approval
- dashboard

## Services
- hr.service.ts (handles attendance, leave, and employee data)

# Data Flow Architecture

User → Component → HR Service → Local/Mock Data
↓
Component State
↓
UI Update

markdown
Copy code

# Routing Configuration

- `/dashboard` – HR overview  
- `/attendance` – Attendance tracker  
- `/employees` – Employee list  
- `/leave-request` – Submit leave  
- `/leave-approval` – Approve leave  

# Forms Implementation

## Reactive Forms
Used in:
- Leave request
- Leave approval

## Template-Driven Forms
Used in:
- Basic input forms and filters

# Running the Application

## Development Server
ng serve

shell
Copy code

## Production Build
ng build

shell
Copy code

## Unit Tests (Karma)
ng test

vbnet
Copy code

## End-to-End Tests
ng e2e

markdown
Copy code

# Future Enhancements

- Login and role-based access control
- Real-time attendance analytics
- Database API integration
- Export options (CSV/PDF)
- Calendar-based leave view
- Dark mode UI
- Push notifications

# Security Features

- Form validation  
- Angular XSS protection  
- Safe error logging  
- Environment-based configuration  
