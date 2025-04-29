#!/bin/bash
ansible-playbook backend.yml
ansible-playbook frontend.yml
ansible-playbook database.yml
