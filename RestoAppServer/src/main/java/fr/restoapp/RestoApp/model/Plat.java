package fr.restoapp.RestoApp.model;


import javax.persistence.*;

@Entity
public class Plat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;
    String nom;
    String description;
    double prix;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "TYPEID")
    Type type;

    public Plat(){

    }
    public Plat( String nom, double prix, String description) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
    }

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Type getType() {
        return type;
    }
}
