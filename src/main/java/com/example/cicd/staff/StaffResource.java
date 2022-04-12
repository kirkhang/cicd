package com.example.cicd.staff;

import java.util.Arrays;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/staff")
public class StaffResource {

  @GetMapping
  public List<Staff> getAllStaff() {
    List<Staff> staffList = Arrays.asList(
        new Staff(1L,"Kirk","kirk@mail.com"),
        new Staff(2L,"Mia","mia@mail.com")
    );
    return staffList;
  }
}
