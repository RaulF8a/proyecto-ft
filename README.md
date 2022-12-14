# Proyecto Final

Repositorio para almacenar el programa correspondiente al proyecto final de la materia Computación Tolerante a Fallas sección D06.

## Autores
* Raúl Francisco Ochoa Díaz

## Funcionamiento
La aplicación permite acceder a dos microservicios: una es una aplicación para obtener el clima de cualquier ciudad del mundo, y la segunda es una lista de pendientes conectada a un servicio remoto de bases de datos. Los datos son persistentes, por lo que si se cierra la aplicación y se vuelve a abrir, la información estara ahí.

## Proceso de Despliegue

Antes de comenzar, será necesario contar con una cuenta de OpenShift y tener instalado el CLI en el entorno local. Lo anterior puede ser facilmente realizado desde el sitio web https://www.redhat.com/en/technologies/cloud-computing/openshift

Una vez hecho lo anterior, es posible comenzar con el despliegue. Cada uno de los servicios cuenta con un Dockerfile y estan cargados en un repositorio individual, el cual será empleado para lanzar la aplicacion en OpenShift. Lo realice utilizando la interfaz gráfica de OpenShift.

![alt text](https://github.com/RaulF8a/proyecto-ft/blob/d5a26c1dd90eed04ffa39206ffffc9bdcd368659/img/Img1.png)

Se selecciona el método de despliegue de Dockerfile, escogemos el puerto en el que corre la aplicación, y comenzamos el proceso.

![alt text](https://github.com/RaulF8a/proyecto-ft/blob/d5a26c1dd90eed04ffa39206ffffc9bdcd368659/img/Img2.png)
![alt text](https://github.com/RaulF8a/proyecto-ft/blob/d5a26c1dd90eed04ffa39206ffffc9bdcd368659/img/Img3.png)

Cuando termina la construcción, el software automaticamente intentara construir un pod de Kubernetes para almacenar la aplicación. Este esta en constante monitoreo, por lo que si en algun momento falla inmediatamente intentara levantarlo de nuevo, volviendo la aplicación **tolerante a fallas**.

![alt text](https://github.com/RaulF8a/proyecto-ft/blob/d5a26c1dd90eed04ffa39206ffffc9bdcd368659/img/Img4.png)
![alt text](https://github.com/RaulF8a/proyecto-ft/blob/d5a26c1dd90eed04ffa39206ffffc9bdcd368659/img/Img5.png)

El despliegue de las tres aplicaciones se muestra en forma de grafo, con la base de datos fuera del grupo ya que no esta alojada dentro de OpenShift.

![alt text](https://github.com/RaulF8a/proyecto-ft/blob/d5a26c1dd90eed04ffa39206ffffc9bdcd368659/img/Img6.png)

Cada una esta corriendo en un solo pod, pero esto puede ser modificado facilmente gracias a la interfaz.

![alt text](https://github.com/RaulF8a/proyecto-ft/blob/d5a26c1dd90eed04ffa39206ffffc9bdcd368659/img/Img5.png)

Si quisieramos alojar localmente el servicio principal, debemos primero clonar el repositorio a la máquina.

```bash
git clone https://github.com/RaulF8a/proyecto-ft.git
```

Luego, nos movemos a la carpeta donde esta el código fuente y debemos utilizar Docker para crear una imagen del programa haciendo uso del Dockerfile.

```bash
docker build -t proyecto-ft .
```

Minikube es una buena opción para crear Kubernetes localmente, por lo que se empleara dicho software para crear el cluster de Kubernetes.

```bash
minikube image load proyecto-ft
```

Haciendo uso de kubectl podemos aplicar las configuraciones de despliegue.

```bash
kubectl apply -f ./app_deployment.yaml
```

Debemos crear un servicio a partir de la aplicación.

```bash
kubectl apply -f ./app_service.yaml
```

Luego, se habilitara el Ingress.

```bash
kubectl apply -f ./app_ingress.yaml
```

Finalmente, solo queda obtener la IP donde se alojo la aplicación.

```bash
kubectl get ing
```

La aplicación es accesible a través del siguiente enlace: https://proyecto-ft-git-v4-raulochoa21-dev.apps.sandbox.x8i5.p1.openshiftapps.com/
Los siguientes enlaces nos llevan a los repositorios de la lista de pendientes y de la aplicación del clima.
* https://github.com/RaulF8a/ToDo-List
* https://github.com/RaulF8a/Weather

## Videos de la Aplicación
* Tolerancia a Fallas con un Solo Pod: https://youtu.be/tIvyimjlr2g
* Tolerancia a Fallas con Múltiples Pods: https://youtu.be/-G6Jsb8vf34
* Funcionamiento de la Aplicación: https://youtu.be/5ZRG5tNrbds

## Herramientas Empleadas

* OpenShift
* Kubernetes
* Docker
* NodeJS
* HTML
* CSS
* MongoDB Atlas

## Diagrama de Arquitectura

![alt text](https://github.com/RaulF8a/proyecto-ft/blob/31a1f5799e049cd5c2b61015cdff5b1866c71a97/img/img7.png)
