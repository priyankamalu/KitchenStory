package com.kitchenStory.kitchenStory.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kitchenStory.kitchenStory.entity.recepy;


@Repository
public interface recepyRepository extends CrudRepository<recepy, Integer> {
	
}
