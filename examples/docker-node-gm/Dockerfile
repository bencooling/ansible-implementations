FROM ansible/ubuntu14.04-ansible:stable

# Add playbooks to the Docker image
ADD ansible /srv/ansible/
WORKDIR /srv/ansible

# Run Ansible to configure the Docker image
RUN ansible-playbook node-gm.yml -c local

# Other Dockerfile directives are still valid
EXPOSE 3000
CMD [ "node" ]
