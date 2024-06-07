FROM gradle:8.7.0-jdk17 AS builder
WORKDIR /home/gradle/project

COPY --chown=gradle:gradle . .

RUN gradle build --no-daemon -x test

FROM openjdk:17-slim
WORKDIR /app

COPY --from=builder /home/gradle/project/build/libs/ejo-0.0.1-SNAPSHOT.jar ./app.jar

CMD ["java", "-jar", "./app.jar", "--spring.profiles.active=dev"]
