# votum-site Helm chart

## Build and push the image

```bash
docker build -t <your-registry>/votum-site:<tag> .
docker push <your-registry>/votum-site:<tag>
```

## Install to dev

```bash
helm upgrade --install votum-site ./helm/votum-site \
  --namespace votum-dev \
  --create-namespace \
  --set image.repository=<your-registry>/votum-site \
  --set image.tag=<tag>
```

The default ingress host is:

- `votum.dev.polygran.io`

If your cluster handles TLS differently, update `ingress.tls` and annotations in `values.yaml`.
