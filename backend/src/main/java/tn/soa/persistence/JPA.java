package tn.soa.persistence;

import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class JPA {
    private static final EntityManagerFactory emf =
            Persistence.createEntityManagerFactory("PU_PERSON");

    public static EntityManagerFactory emf() {
        return emf;
    }

    public static void close() {
        if (emf != null && emf.isOpen()) {
            emf.close();
        }
    }
}