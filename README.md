# 🚀 2-Tier Application Deployment Using Ansible (Remote Setup)

This project automates the deployment of a simple 2-tier application architecture:
- **Frontend** → Nginx Web Server (Static Website)
- **Backend** → Apache Server (PHP Application)
- **Database** → MySQL Server (Database Storage)

All setup remotely using **Ansible** playbooks.

---


---

## 🚀 What This Project Does

- Sets up Nginx server on frontend.
- Deploys Apache server and PHP backend on backend.
- Installs and configures MySQL database on database server.
- Uploads code (`index.html`, `backend.php`, `database.sql`) automatically.
- Optionally installs Docker if required.
- Provides shutdown automation for services.

---

## 🔧 Requirements

- Ubuntu-based EC2 instances (or VMs)
- Ansible installed on control node
- SSH private key access
- Python3 and pip on target servers
- MySQL client libraries (`PyMySQL` installed)

---

## 🛠️ How to Run

1. Update your inventory file (`/etc/ansible/hosts`) with correct server IPs.
2. Run the individual playbooks:

```bash
ansible-playbook backend.yml
ansible-playbook frontend.yml
ansible-playbook database.yml
```
or you can make a shell script to deploy all the files 
---

## 🌐 Application Flow
1.User visits the frontend (Nginx) via IP.
2.Frontend forwards data to backend (Apache/PHP).
3.Backend talks to the database (MySQL).
4.Database stores or retrieves data as needed.




