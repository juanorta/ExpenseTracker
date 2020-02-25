package com.example.juanexpense.expense.controller;

import com.example.juanexpense.expense.model.Category;
import com.example.juanexpense.expense.respository.CategoryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CategoryController {
    private CategoryRepository categoryRepository;

    public CategoryController(CategoryRepository categoryRepository) {
        super();
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/categories")
    Collection<Category> categories(){
        //select * from category
        return categoryRepository.findAll();
    }

    @GetMapping("/category/{id}")
    ResponseEntity<?> getCategory(@PathVariable Long id){
        //return category. might return nothing if id not valid
        Optional<Category> category = categoryRepository.findById(id);

        //map it to response if OK... create new response entity and send back NOT FOUND to browser if invalid id
        return category.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/category")
    //expecting valid request body of type Category named category
    ResponseEntity<Category> createCategory(@Valid @RequestBody Category category) throws URISyntaxException{
        Category result = categoryRepository.save(category);
        //insert into table...

        return ResponseEntity.created(new URI("/api/category/" + result.getId())).body(result);
    }

    //edit or override a category
    //spring boot is smart enough to realize if it's a put, then override existing record
    @PutMapping("/category/{id}")
    ResponseEntity<Category> updateCategory(@Valid @RequestBody Category category){
        Category result = categoryRepository.save(category);
        return ResponseEntity.ok().body(result);
    }
}
