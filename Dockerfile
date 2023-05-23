#
# Build stage
#
FROM maven:3.8.5-openjdk-18 AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package -Dmaven.test.skip

#
# Package stage
#
FROM openjdk:18
COPY --from=build /home/app/target/booking-0.0.1.jar /usr/local/lib/booking.jar
EXPOSE 8080
CMD ["java", "-jar", "/usr/local/lib/booking.jar"]
