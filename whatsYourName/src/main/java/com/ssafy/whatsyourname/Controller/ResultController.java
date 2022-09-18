package com.ssafy.whatsyourname.Controller;

import com.ssafy.whatsyourname.Dto.ResponseResultDto;
import com.ssafy.whatsyourname.Service.ServiceImpl.ResultServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ResultController {
    private final ResultServiceImpl resultService;
    private final String FAIL = "FAIL";

    @GetMapping("/report/{name}")
    public ResponseEntity<?> getFinalName(@PathVariable("name") String name) {
        ResponseResultDto result = resultService.findFinalName(name);
        System.out.println("name = " + name);
        if (!result.getName().equals("")) {
            return new ResponseEntity<>(result, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(FAIL, HttpStatus.NOT_FOUND);
        }

    }
}
