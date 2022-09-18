package com.ssafy.whatsyourname.Controller;

import com.ssafy.whatsyourname.Dto.ResponseResultDto;
import com.ssafy.whatsyourname.Service.ServiceImpl.ResultServiceImpl;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
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

    @ApiOperation(value="Name에 대한 전체 결과 반환")
    @ApiResponses({
            @ApiResponse(code=200,message="API 정상 작동"),
            @ApiResponse(code=404,message="해당 이름 없음")
    })
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
