package com.kitchenStory.kitchenStory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.kitchenStory.kitchenStory.entity.recepy;
import com.kitchenStory.kitchenStory.repository.recepyRepository;

@SpringBootApplication
public class KitchenStoryApplication {
    @Autowired
	private recepyRepository recepyrepo;
	public static void main(String[] args) {
		SpringApplication.run(KitchenStoryApplication.class, args);
	}
	   @Bean
		public CommandLineRunner commandLineRunner() {
		   CommandLineRunner runner=new CommandLineRunner() {
			
			@Override
			public void run(String... args) throws Exception {
				recepy r1=new recepy();
				recepy r2=new recepy();
				r1.setRname("Biryani");
				r1.setPrice("240");
				r1.setDisc("http://media.istockphoto.com/id/1355635210/photo/pilau-or-vegetable-biryani.jpg?b=1&s=170667a&w=0&k=20&c=nwhUNrGCch19aqzISaZUbGHORtcBVsZWmfk-RLeWuCE=\"");
					r2.setDisc("https://media.istockphoto.com/id/1318013821/photo/pan-fried-paneer.jpg?b=1&s=170667a&w=0&k=20&c=ZvYhLxU708WWFcrtfzzVdmsp9xIukjYIwzVypx00I5s=\"");
			      r2.setPrice("230");
			      r2.setRname("PannerMasala");
			      recepyrepo.save(r1);
			      recepyrepo.save(r2);
			}
		};
		   return runner;
			
		}
	

}
