package tn.soa.service;

import jakarta.persistence.EntityManager;
import tn.soa.model.Person;
import tn.soa.persistence.JPA;

import java.util.List;

public class PersonService {

    public List<Person> findAll() {
        EntityManager em = JPA.emf().createEntityManager();
        try {
            return em.createQuery("select p from Person p", Person.class).getResultList();
        } finally { em.close(); }
    }

    public Person findById(long id) {
        EntityManager em = JPA.emf().createEntityManager();
        try {
            return em.find(Person.class, id);
        } finally { em.close(); }
    }

    public List<Person> findByName(String name) {
        EntityManager em = JPA.emf().createEntityManager();
        try {
            return em.createQuery("select p from Person p where lower(p.name) like :q", Person.class)
                    .setParameter("q", "%" + name.toLowerCase() + "%")
                    .getResultList();
        } finally { em.close(); }
    }

    public Person create(Person p) {
        EntityManager em = JPA.emf().createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(p);
            em.getTransaction().commit();
            return p;
        } catch (RuntimeException e) {
            if (em.getTransaction().isActive()) em.getTransaction().rollback();
            throw e;
        } finally { em.close(); }
    }

    public Person update(long id, Person incoming) {
        EntityManager em = JPA.emf().createEntityManager();
        try {
            em.getTransaction().begin();
            Person p = em.find(Person.class, id);
            if (p == null) return null;
            p.setName(incoming.getName());
            p.setEmail(incoming.getEmail());
            p.setAge(incoming.getAge());
            em.getTransaction().commit();
            return p;
        } catch (RuntimeException e) {
            if (em.getTransaction().isActive()) em.getTransaction().rollback();
            throw e;
        } finally { em.close(); }
    }

    public boolean delete(long id) {
        EntityManager em = JPA.emf().createEntityManager();
        try {
            em.getTransaction().begin();
            Person p = em.find(Person.class, id);
            if (p == null) return false;
            em.remove(p);
            em.getTransaction().commit();
            return true;
        } catch (RuntimeException e) {
            if (em.getTransaction().isActive()) em.getTransaction().rollback();
            throw e;
        } finally { em.close(); }
    }
}
