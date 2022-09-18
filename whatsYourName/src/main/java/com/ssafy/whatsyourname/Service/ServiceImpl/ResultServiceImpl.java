package com.ssafy.whatsyourname.Service.ServiceImpl;

import com.ssafy.whatsyourname.Domain.Result;
import com.ssafy.whatsyourname.Dto.ResponseResultDto;
import com.ssafy.whatsyourname.Repository.ResultRepository;
import com.ssafy.whatsyourname.Service.ResultService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = false)
public class ResultServiceImpl implements ResultService {
    private final ResultRepository resultRepository;

    @Override
    public ResponseResultDto findFinalName(String name) {
        Optional<Result> resultOptional = resultRepository.findByName(name);
        if(resultOptional.isPresent()){
            System.out.println("resultOptional.get() = " + resultOptional.get());
            ResponseResultDto dto = new ResponseResultDto(resultOptional.get());
            return dto;
        }else{
            throw new NoSuchElementException("해당 이름을 찾을 수 없습니다.");
        }
    }
}
