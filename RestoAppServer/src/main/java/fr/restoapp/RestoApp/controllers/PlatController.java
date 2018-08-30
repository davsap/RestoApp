package fr.restoapp.RestoApp.controllers;

import fr.restoapp.RestoApp.model.Plat;
import fr.restoapp.RestoApp.repositories.PlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
 @CrossOrigin(origins = {"http://localhost:4200"}, maxAge = 3600)
public class PlatController {

    @Autowired
    private PlatRepository platRepository;


    @RequestMapping(value="/plats",method=RequestMethod.GET)
    public List<Plat> getPlats(){
        return platRepository.findAll();
    }

    @GetMapping(value="/plats/{id}")
    public Plat getPlat(@PathVariable long id){
        return platRepository.findById(id).get();
    }

    @PostMapping(value = "plats")
    public void ajouterPlat(@RequestBody Plat plat){
        platRepository.save(plat);
    }
/*
    @PutMapping(value = "/plats")
    public Plat modifierPlat(@RequestBody Plat plat) {
        return platRepository.save(plat);
    }
*/
    @DeleteMapping(value = "plats/{id}")
    public void deletePlat(@PathVariable Long id){
        Plat plat = platRepository.findById(id).get();
        platRepository.delete(plat);
    }

    @PutMapping(value = "plats")
    public Plat updateRepas(@RequestBody Plat plat){
        return platRepository.save(plat);
    }
}