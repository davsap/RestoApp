package fr.restoapp.RestoApp.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlatController {
    @RequestMapping(value="/plats",method=RequestMethod.GET)
    public String getPlat(){
        return "Bouffff";
    }
}
