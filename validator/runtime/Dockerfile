FROM ubuntu
RUN apt-get update && apt-get install -y software-properties-common
#RUN add-apt-repository ppa:jonathonf/python-3.6
#RUN apt-get update && apt-get install -y python3.6 python3-pip
RUN apt-get update && apt-get install -y python3-pip
# Install and upgrade pip3
CMD bash
RUN python3 -m pip install --upgrade pip
ADD requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
ENV RUNNING_LOCALLY=True
CMD bash -c "cd /app && python3 app.py"
