package com.kitchenStory.kitchenStory.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kitchenStory.kitchenStory.entity.recepy;
import com.kitchenStory.kitchenStory.service.recepyService;
@RestController
@RequestMapping("/rec")
@CrossOrigin(origins="http://localhost:4200")

public class recepyController {
	@Autowired
	private recepyService recepyservice;
	@PostMapping
	public ResponseEntity<?> insertRecepy(@RequestBody recepy r){
		recepyservice.insertRecepy(r);
		return new ResponseEntity<String>("insertion done",HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteRecepy(@PathVariable("id")int id)
	{
		recepyservice.deleteRecepy(id);
		return new ResponseEntity<String>("deletion done",HttpStatus.OK);

	}
	
	@GetMapping
	public ResponseEntity<Iterable<recepy>> getRecepys()
	{
		Iterable<recepy> rece=recepyservice.getRecepys();
		return new ResponseEntity<Iterable<recepy>>(rece,HttpStatus.OK);

	}
	@GetMapping("/{id}")
	public ResponseEntity<recepy> getRecepy(@PathVariable("id")int id)
	{
	  recepy rece=recepyservice.getRecepy(id);
		return new ResponseEntity<recepy>(rece,HttpStatus.OK);

	}
	

}
