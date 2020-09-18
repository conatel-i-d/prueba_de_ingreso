FROM ubuntu:18.04
RUN apt-get update && apt-get install -y iputils-ping net-tools less man openssh-server sudo bind9 nano dnsutils
RUN adduser --disabled-password --gecos "" admin
RUN echo admin:admin | chpasswd
RUN usermod -aG sudo admin
ADD named.conf.local /etc/bind/
RUN cd /etc/bind && mkdir zones
ADD prueba.conatel.com.uy.db /etc/bind/zones/
CMD service ssh start && tail -f /var/log/lastlog

