package tn.soa.api;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import tn.soa.model.Person;
import tn.soa.service.PersonService;

import java.util.List;

@Path("/persons")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PersonResource {

    private final PersonService service = new PersonService();

    @GET
    public List<Person> all() {
        return service.findAll();
    }

    @GET
    @Path("/{id}")
    public Response byId(@PathParam("id") long id) {
        Person p = service.findById(id);
        return (p == null) ? Response.status(404).build() : Response.ok(p).build();
    }

    @GET
    @Path("/search")
    public List<Person> search(@QueryParam("name") String name) {
        if (name == null || name.isBlank()) return List.of();
        return service.findByName(name);
    }

    @POST
    public Response create(Person p) {
        if (p.getName() == null || p.getName().isBlank())
            return Response.status(400).entity("name required").build();
        return Response.status(201).entity(service.create(p)).build();
    }

    @PUT
    @Path("/{id}")
    public Response update(@PathParam("id") long id, Person p) {
        Person updated = service.update(id, p);
        return (updated == null) ? Response.status(404).build() : Response.ok(updated).build();
    }

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") long id) {
        return service.delete(id) ? Response.noContent().build() : Response.status(404).build();
    }
}
