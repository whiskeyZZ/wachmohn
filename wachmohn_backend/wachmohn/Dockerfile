FROM maven:3.9.8-eclipse-temurin-21-alpine AS build

WORKDIR /app

COPY pom.xml .
#RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21

WORKDIR /app

COPY --from=build /app/target/wachmohn-1.0.jar .

EXPOSE 8080

CMD ["java", "-jar", "wachmohn-1.0.jar"]