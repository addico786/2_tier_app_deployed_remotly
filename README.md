# 🚀 2-Tier Application Deployment Using Ansible (Remote Setup)

Hey everyone! 👋  
In this project, I'm showing you how I deployed a complete **2-tier application** — that’s **frontend, backend, and database** — across **three different remote servers** using **only Ansible**. No manual SSH, no copy-paste. Everything is automated and managed cleanly through Ansible playbooks.

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
```
./deploy.sh
```
the above script is present in the repo
---

## 🌐 Application Flow
1.User visits the frontend (Nginx) via IP.
2.Frontend forwards data to backend (Apache/PHP).
3.Backend talks to the database (MySQL).
4.Database stores or retrieves data as needed.
---

## 🧰 Tools I Used

Here’s a quick breakdown of the tools involved in this setup:

- **AWS EC2 Instances** – I launched three virtual machines (frontend, backend, database) on AWS.
- **AWS CLI** – Used to manage and automate instance creation and EIP assignment.
- **AWS Elastic IPs** – To keep my server IPs static across reboots.
- **Ansible** – My main automation tool to configure and deploy everything remotely.
- **Ubuntu** – The OS used for all servers.
- **MySQL** – For storing backend data on the database tier.
- **Apache2 + PHP** – Used for running the backend service.
- **Nginx** – To serve the frontend web page.

---
## 📌 Future Enhancements

1.Deploy full application using Docker Compose.
2.Add SSL/TLS to frontend nginx.
3.CI/CD pipeline with GitHub Actions and Ansible.
4.Add load balancing with HAProxy.
---
## Author
Made by Adnan Khan
