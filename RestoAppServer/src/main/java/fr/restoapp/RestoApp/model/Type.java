package fr.restoapp.RestoApp.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    String nom;

    @OneToMany(mappedBy = "type",cascade = CascadeType.ALL)
    List<Plat> plats ;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public  void addPlat(Plat plat){
        this.plats.add(plat);
    }
}
