package com.kitchenStory.kitchenStory.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.kitchenStory.kitchenStory.repository.recepyRepository;
import com.kitchenStory.kitchenStory.entity.recepy;

@Service
public class recepyService implements recepyint{
	
	private recepyRepository recepyrepo; 
	
	public  recepyService(recepyRepository recepyrepo1 )
	{ super();
		this.recepyrepo=recepyrepo1;
	}
	@Override
	public void insertRecepy(recepy r)
	{
		recepyrepo.save(r);
	}
	@Override
	public void deleteRecepy(int id)
	{
		recepyrepo.deleteById(id);
	}
	@Override
	public Iterable<recepy> getRecepys()
	{
		Iterable<recepy> l=new ArrayList<>();
         l=recepyrepo.findAll();
         return l;
		//return recepyrepo.findAll();
	}
	
	@Override
	public recepy getRecepy(int id) 
	{
		return recepyrepo.findById(id);
	}
}


