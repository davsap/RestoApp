package fr.restoapp.RestoApp.controllers;

import fr.restoapp.RestoApp.model.Type;
import fr.restoapp.RestoApp.repositories.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"}, maxAge = 3600)
public class TypeController {
    @Autowired
    private TypeRepository typeRepository;

    @RequestMapping(value="/types",method=RequestMethod.GET)
    public List<Type> getTypes(){
        return typeRepository.findAll();
    }

    @GetMapping(value="/types/{id}")
    public Type getType(@PathVariable long id){
        return typeRepository.findById(id).get();
    }

    @PostMapping(value = "types")
    public void ajouterTypes(@RequestBody Type type){
        typeRepository.save(type);
    }

}
