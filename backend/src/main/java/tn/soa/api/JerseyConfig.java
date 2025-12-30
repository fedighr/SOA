package tn.soa.api;

import org.glassfish.jersey.server.ResourceConfig;

public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        packages("tn.soa.api");
        register(CorsFilter.class);
    }
}
