FROM ubuntu:18.04
# Definition of variables
ENV node_version=node-v12.16.3-linux-x64
ENV node_folder=/node
ENV app_folder=/app
# The following line untar the file automatically
ADD node-v12.16.3-linux-x64.tar.xz ${node_folder}
# Node, NPM and NPX are now installed in ${node_folder}/${node_version}/bin/
RUN bash -c "cd /usr/bin && ln -s ${node_folder}/${node_version}/bin/node"
RUN bash -c "cd /usr/bin && ln -s ${node_folder}/${node_version}/bin/npx"
RUN bash -c "cd /usr/bin && ln -s ${node_folder}/${node_version}/bin/npm"
RUN useradd -m -p ialmandos -s /bin/bash ialmandos
RUN apt-get update && apt-get install -y git
USER ialmandos

