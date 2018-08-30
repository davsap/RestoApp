package fr.restoapp.RestoApp.repositories;

import fr.restoapp.RestoApp.model.Plat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlatRepository extends JpaRepository<Plat, Long> {
}

