package tn.soa.api;

import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerResponseContext;
import jakarta.ws.rs.container.ContainerResponseFilter;

public class CorsFilter implements ContainerResponseFilter {
    @Override
    public void filter(ContainerRequestContext req, ContainerResponseContext res) {
        res.getHeaders().putSingle("Access-Control-Allow-Origin", "http://localhost:5173");
        res.getHeaders().putSingle("Access-Control-Allow-Credentials", "true");
        res.getHeaders().putSingle("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        res.getHeaders().putSingle("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    }
}
