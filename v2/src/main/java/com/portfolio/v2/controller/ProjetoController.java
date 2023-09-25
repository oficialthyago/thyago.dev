package com.portfolio.v2.controller;

import com.portfolio.v2.model.ProjetoModel;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v2/projetos")
@CrossOrigin(origins = "*")
public class ProjetoController{


    private final List<ProjetoModel> projetos = new ArrayList<>();
    public ProjetoController() {
        // Inicialize sua lista de projetos com projetos reais aqui
        projetos.add(new ProjetoModel("Lotericas - LotoMoney"));
        projetos.add(new ProjetoModel("Pokedex"));
        projetos.add(new ProjetoModel("Calculadora"));
    }

    @GetMapping("/buscar")
    public List<ProjetoModel> buscarProjetos(@RequestParam String query) {
        return projetos.stream()
                .filter(projetoModel -> projetoModel.getNome().toLowerCase().contains(query.toLowerCase()))
                .collect(Collectors.toList());
       }
}