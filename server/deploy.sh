# Need to setup windows subsystem to use this script
# chmod +x deploy.sh
# ./deploy.sh to run

docker build -t kkevindaii/lireddit:$VERSION .
docker push kkevindaii/lireddit:$VERSION
ssh root@143.198.68.26 "docker pull kkevindaii/lireddit:$VERSION && docker tag kkevindaii/lireddit:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"