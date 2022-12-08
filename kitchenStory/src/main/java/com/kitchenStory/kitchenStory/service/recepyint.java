package com.kitchenStory.kitchenStory.service;

import java.util.List;
import java.util.Optional;

import com.kitchenStory.kitchenStory.entity.recepy;


public interface recepyint {
	void insertRecepy(recepy r);
	void deleteRecepy(int id);
	Iterable<recepy> getRecepys();
	recepy getRecepy(int id);
}
